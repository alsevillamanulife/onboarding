import React, {useState} from 'react'
import { 
    H3, Card, Button, Modal, BREAKPOINTS, TextInput, Dropdown, DatePicker
    //@ts-ignore 
} from '@manulife/mux';
import { 
    ButtonPlusFilled
    //@ts-ignore
} from '@manulife/mux-cds-icons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import LicenseResults from '../component/LicenseResults';
import { organizationLabels } from '../labels/organizationLabels';


interface FormInput {
    licenseType: string,
    licenseNumber: string,
    effectiveDate: string,
    expiryDate: string,
    status: string,
    province:string,
    agentName:string,
    ownerType:string,
}
type Params = {
    code: string
}
const CHECKDATE = gql`
    query Query($where: JSON) {
        licenses(where: $where) {
             id
        }
    }
`;
const CREATE_LICENSE =  gql`
   mutation Mutation($input: CreateLicenseInput!) {
        createLicense(input: $input) {
        ownerCode
        }
    }
`;
const LicenseModal = () => {
    const { code } = useParams<Params>();
    const alert = useAlert();
    const [isModalOpen, setModalOpen] = useState(false);
    const modalOpen = () => {
        setModalOpen(true);
      };
    
      const modalClose = () => {
        setModalOpen(false);
      };
    const [eDate, setEDate] = useState('');
    const [expDate, setExpDate] = useState('');
    const [oType, setOtype] = useState('');
    console.log('oType',oType);
    const [getData, setGetData] = useState({
        licenseType: '',
        licenseNumber: '',
        effectiveDate: '',
        expiryDate: '',
        status: '',
        province: '',
        agentName: '',
        ownerType:'',
    })
    const before = new Date();
    const after = new Date();
    before.setDate(before.getDate());
    after.setFullYear(after.getFullYear() + 1);
    const {
        licence: { labels: licenseLabels }
    } = organizationLabels;

      const { control, handleSubmit, reset } = useForm<FormInput>({
    })
    const [checkDate, {data}] = useLazyQuery(CHECKDATE,{
        nextFetchPolicy: "cache-first",
        onCompleted:()=>{
            if(Array.isArray(data.licenses) && data.licenses.length){
                alert.error('Date not available');
            }else{
            createLicense();
            }
        }
    })
    const [createLicense] = useMutation(CREATE_LICENSE,{
        variables:{
            input:{
                ownerCode: code,
                licenseType: getData.licenseType,
                licenseNumber: getData.licenseNumber,
                effectiveDate: getData.effectiveDate,
                expiryDate: getData.expiryDate,
                status: getData.status,
                province: getData.province,
                agentName: getData.agentName ? null : getData.agentName,
                ownerType:oType,
                type: 'LICENSE'
            }
        },onCompleted: () => {
            alert.success('License Saved');
        },onError(e){
            alert.error((e as Error).message);
        }
    })
    const onSubmit:SubmitHandler<FormInput> = data => {
        checkDate({ 
            variables: {
            where:{
                ownerCode: { $regex : code },
                effectiveDate: { $lte : expDate},
                $or: [{ expiryDate: null }, { expiryDate: { $gte: eDate } }]
                }
            }
        });
        setGetData(data);
        
    }
    console.log('setData',getData);
    return (
        <div>
             <div className='row'>
            <Card customStyle={{
            cardStyle: {
                marginTop: '30px'
                }
            }}>
            <Card.Header withAdornment>
                <div className='organizationFloat'>
                    <H3>License</H3>
                    <Button onClick={modalOpen} variant="tertiary" icon={<ButtonPlusFilled/>} >Add License</Button>   
                </div>
                </Card.Header>
                <Card.Content>
                    <LicenseResults/>
                </Card.Content>
            </Card>
            <Modal isOpen={isModalOpen} onClose={modalClose} customStyle={{
                modalStyle: {
                    width: '1200px',
                    media: [{
                    maximum: BREAKPOINTS.PHONE_PORTRAIT_MED,
                    }]
                }
                }} ariaLabel="Timeout Modal" ariaLabelledBy="heading" ariaDescribedBy="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <H3>Create License</H3>
                        <Controller
                            control={control}
                            name="licenseType"
                            rules={{
                                required:'Please enter License Type',
                            }}
                            render ={({
                                field: { onChange, onBlur, value, name, ref},
                                fieldState: { error }
                            }) => (
                                <Dropdown
                                    label={licenseLabels.licenseType}
                                    ref={ref}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={(e:any) => {
                                        onChange(e);
                                        if(e === 'AGENCY'){
                                            setOtype('ORGANIZATION');
                                        }
                                        else if(e === 'AGENT'){
                                            setOtype('AGENT_ASSOCIATION');
                                        }
                                    }
                                }
                                    placeholder="Select"
                                    errors ={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                    customStyle={{
                                        rootStyle: {
                                        width: '40%',
                                        marginLeft:'30px'
                                        }
                                    }}
                                    dropdownItems={licenseLabels.licenceOptions}
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="agentName"
                            render={({
                                field: { onChange, onBlur, value, name, ref},
                                fieldState: { error }
                            }) => (
                                <TextInput
                                    label={licenseLabels.agentName}
                                    ref={ref}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                    customStyle={{
                                    rootStyle: {
                                        marginLeft:'30px',
                                        width:'40%'
                                    }
                                }} 
                                disabled
                                readOnly
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="licenseNumber"
                            rules={{
                                required:'Please enter License Number',
                            }}
                            render={({
                                field: { onChange, onBlur, value, name, ref},
                                fieldState: { error }
                            }) => (
                                <TextInput
                                    label={licenseLabels.licenseNumber}
                                    ref={ref}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                    customStyle={{
                                    rootStyle: {
                                        marginLeft:'30px',
                                        width: '94%',
                                    }
                                }} 
                                />
                            )}
                        />
                        <div className='row'>
                            <Controller 
                                control={control}
                                name="effectiveDate"
                                rules={{
                                    required:'Please enter Effective Date',
                                }}
                                render={({
                                    field: { onChange, onBlur, value, name, ref},
                                    fieldState: { error }
                                }) => (
                                    <DatePicker
                                        label={licenseLabels.effectiveDate}
                                        ref={ref}
                                        name={name}
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={ (e:any)=>{
                                            setEDate(e + 'T00:00:00.000Z');
                                            onChange(e);
                                        }}
                                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                        dateFormat="YYYY-MM-DD"
                                        customStyle={{
                                        rootStyle: {
                                            marginLeft:'40px',
                                            width:'45%'
                                            }
                                        }}
                                        disabledDays={{
                                            before,
                                            after
                                          }} 
                                    />
                                )}
                            />
                            <Controller 
                                control={control}
                                name="expiryDate"
                                rules={{
                                    required:'Please enter expiryDate',
                                }}
                                render={({
                                    field: { onChange, onBlur, value, name, ref},
                                    fieldState: { error }
                                }) => (
                                    <DatePicker
                                        label={licenseLabels.expiryDate}
                                        ref={ref}
                                        name={name}
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={ (e:any)=>{
                                            setExpDate(e + 'T00:00:00.000Z');
                                            onChange(e);
                                        }}
                                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                        dateFormat="YYYY-MM-DD"
                                        customStyle={{
                                        rootStyle: {
                                            marginLeft:'30px',
                                            width:'45%'
                                            }
                                        }}
                                        disabledDays={{
                                            before,
                                            after
                                          }} 
                                    />
                                )}
                            />
                        </div>
                        <div className='row'>
                        <Controller
                            control={control}
                            name="status"
                            rules={{
                                required:'Please enter Status',
                            }}
                            render ={({
                                field: { onChange, onBlur, value, name, ref},
                                fieldState: { error }
                            }) => (
                                <Dropdown
                                    label={licenseLabels.status}
                                    ref={ref}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    placeholder="Select"
                                    errors ={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                    customStyle={{
                                        rootStyle: {
                                        width: '45%',
                                        marginLeft:'40px'
                                        }
                                    }}
                                    dropdownItems={licenseLabels.statusOptions}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="province"
                            rules={{
                                required:'Please enter Province',
                            }}
                            render ={({
                                field: { onChange, onBlur, value, name, ref},
                                fieldState: { error }
                            }) => (
                                <Dropdown
                                    label={licenseLabels.province}
                                    ref={ref}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    placeholder="Select"
                                    errors ={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                                    customStyle={{
                                        rootStyle: {
                                        width: '45%',
                                        marginLeft:'30px'
                                        }
                                    }}
                                    dropdownItems={licenseLabels.provinceOptions}
                                />
                            )}
                        />
                        </div>
                        <Button
                        type='submit'
                            customStyle={{
                            buttonStyle: {
                                marginTop:'20px',
                                marginLeft:'30px'
                            }
                        }}>
                        Save
                        </Button>
                </form>
            </Modal>
            </div>
        </div>
    )
}

export default LicenseModal
