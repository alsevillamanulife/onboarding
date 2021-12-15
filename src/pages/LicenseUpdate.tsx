import React,{useState} from 'react'
import { 
    H3, Card, Button, TextInput, Dropdown, DatePicker
    //@ts-ignore 
} from '@manulife/mux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';

import { organizationLabels } from '../labels/organizationLabels';

interface FormInput {
    id:string,
    effectiveDate:string,
    expiryDate:string,
    licenseNumber:string,
    licenseType:string,
    ownerCode:string,
    ownerType:string,
    province:string,
    status:string,
    type:string,
    agent:string
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
const UPDATE_LICENSE =  gql`
   mutation Mutation($updateLicenseId: ID!, $input: UpdateLicenseInput) {
  updateLicense(id: $updateLicenseId, input: $input) {
  id  
  }
}
`;

const LICENSE_LIST = gql `
query License($licenseId: ID!) {
  license(id: $licenseId) {
    id
    effectiveDate
    expiryDate
    licenseNumber
    licenseType
    ownerCode
    ownerType
    province
    status
    type
    }
  }
`;

const LicenseUpdate = () => {
    const { code } = useParams<Params>();
    const alert = useAlert();
    const [eDate, setEDate] = useState('');
    const [expDate, setExpDate] = useState('');
    const [oType, setOtype] = useState('');
    const [getData, setGetData] = useState({
        id:'',
        effectiveDate:'',
        expiryDate:'',
        licenseNumber:'',
        licenseType:'',
        ownerCode:'',
        ownerType:'',
        province:'',
        status:'',
        type:''
    })
    const before = new Date();
    const after = new Date();
    before.setDate(before.getDate());
    after.setFullYear(after.getFullYear() + 1);
    const {
        licence: { labels: licenseLabels }
    } = organizationLabels;

      const { control, handleSubmit, reset } = useForm<FormInput>({
          defaultValues:{
            id:'',
            effectiveDate:'',
            expiryDate:'',
            licenseNumber:'',
            licenseType:'',
            ownerCode:'',
            ownerType:'',
            province:'',
            status:'',
            type:'',
            agent:''
          }
    })
    //Theres a bug in Controller if the 'where' used for fetching a list of data
    // It fetches the data but passing to the variables results in an editable
    //forms.
    const license = useQuery(LICENSE_LIST,{
        variables: {
            licenseId: code
        }, onCompleted: () => {
            setGetData(license.data.license);
            reset(license.data.license);
        }
    })
    const [checkDate, {data}] = useLazyQuery(CHECKDATE,{
        nextFetchPolicy: "cache-first",
        onCompleted:()=>{
            if(Array.isArray(data.licenses) && data.licenses.length){
                alert.error('Date not available');
            }else{
                updateLicense();
            }
        }
    })
    const [updateLicense] = useMutation(UPDATE_LICENSE,{
        variables:{
            updateLicenseId:getData.id,
            input:{
                expiryDate:getData.expiryDate,
                licenseNumber:getData.licenseNumber,
                licenseType:getData.licenseType,
                ownerCode:getData.ownerCode,
                ownerType:getData.ownerType,
                province:getData.province,
                status:getData.status,
            }
        },onCompleted: () => {
            alert.success('License Saved');
        },onError(e){
            alert.error((e as Error).message);
        }
    })
    if (license.loading) {
        return <p>Loading ...</p>
    };
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
        console.log('dateaa',getData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Card customStyle={{
            cardStyle: {
                marginTop: '30px'
                }
            }}>
            <Card.Header withAdornment>
                <H3>Create License</H3>
            </Card.Header>
            <Card.Content>
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
                    name="agent"
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
                                disabled
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
                </Card.Content>
            </Card>
        </form>
    </div>
    )
}

export default LicenseUpdate
