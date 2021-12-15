import React, { useState } from 'react';
import { H3, Button, Modal, BREAKPOINTS, TextInput, Dropdown
    //@ts-ignore
    } from '@manulife/mux';
import { 
    ButtonPlusFilled
    //@ts-ignore
} from '@manulife/mux-cds-icons';
import '../App.css';

import { useAlert } from 'react-alert';

import { organizationLabels } from '../labels/organizationLabels';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
interface FormInput {
    id:string,
    code:string,
    status:{label: string; value: string },
    organizationName:string,
    category:{label: string; value: string },
    organizationNameInFrench:string,
    level:string,
    moneris: {apiToken: string, profileId:string, storeId:string},
    paymentGateway: string
}
const CREATE_ORGANIZATION = gql`
    mutation ($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
    }
  }
`;
const OrganizationModal = () => {
    const history = useHistory();
    const alert = useAlert();
    const [isModalOpen, setModalOpen] = useState(false);
    const modalOpen = () => {
        setModalOpen(true);
      };
    
      const modalClose = () => {
        setModalOpen(false);
      };

    const [getData, setGetData] = useState({
        id:'',
        code:'',
        status:{label:'', value:''},
        organizationName:'',
        category:{label:'', value:''},
        organizationNameInFrench:'',
        level:'N/A',
        moneris: {apiToken: '', profileId:'', storeId:''},
        paymentGateway: 'MONERIS'
    });
    const {
        organization: { labels: orgLabels }
    } = organizationLabels;

    const { control, handleSubmit } = useForm<FormInput>({
        defaultValues:{
            id:'',
            code:'',
            status:{label:'', value:''},
            organizationName:'',
            category:{label:'', value:''},
            organizationNameInFrench:'',
            level:'N/A',
            moneris: {apiToken: '', profileId:'', storeId:''},
            paymentGateway:'MONERIS'
        }
    })

    const onSubmit:SubmitHandler<FormInput> = async data =>{
        try{
            setGetData(data);
            await createOrg();
            alert.success('Data Saved!');
            history.push(`/organization/${data.code}`);
            modalClose();
        }catch(e){
            alert.error((e as Error).message);
        }    
    };
    const [createOrg] = useMutation(CREATE_ORGANIZATION,{
        variables: {
            input:{
                code: getData.code,
                status: getData.status,
                organizationName: getData.organizationName,
                category: getData.category,
                organizationNameInFrench: getData.organizationNameInFrench,
                moneris: getData.moneris,
                paymentGateway: getData.paymentGateway
            }
        }
    })
    return (
        <div>
            <Button customStyle={{
                buttonStyle: {marginTop:'13px'}
                }} onClick={modalOpen} variant="tertiary" icon={<ButtonPlusFilled/>} >Create Organization</Button>

            <Modal isOpen={isModalOpen} onClose={modalClose} customStyle={{
                modalStyle: {
                    height: 'auto',
                    width: '1200px',
                    media: [{
                    maximum: BREAKPOINTS.PHONE_PORTRAIT_MED,
                    width: '85%'
                    }]
                }
                }} ariaLabel="Timeout Modal" ariaLabelledBy="heading" ariaDescribedBy="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                <H3>Create Organization</H3>
                <div className='row'>
                    <Controller
                        control={control}
                        name="code"
                        rules={{
                        required: 'Please enter Organization code',
                        }}
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { error },
                        }) => (
                        <TextInput 
                            label={orgLabels.code}
                            ref={ref}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                            customStyle={{
                            rootStyle: {
                                marginLeft:'30px'
                                }
                            }} 
                         />
                    )}/>
                    <Controller
                    control={control}
                    name="status"
                    rules={{
                        required: 'Please select status',
                        }}
                    render={({
                        field: { onChange, onBlur, value, name, ref},
                        fieldState: {error},
                    }) => (
                        <Dropdown
                        label={orgLabels.status}
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder="Select"
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                        customStyle={{
                            rootStyle: {
                            width: '295px',
                            marginLeft:'30px'
                            }
                        }}
                        dropdownItems={orgLabels.orgStatusOptions}
                        />
                        )}
                    />
                    <Controller
                    control={control}
                    name="organizationName"
                    rules={{
                        required: 'Please enter Organization Name',
                        }}
                    render={({
                        field: { onChange, onBlur, value, name, ref},
                        fieldState: {error},
                    }) => (
                        <TextInput 
                        label={orgLabels.organizationName}
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                        customStyle={{
                            rootStyle: {
                            width: '450px',
                            marginLeft:'30px'
                            }
                        }} 
                    />
                    )}
                    />
                    <Controller
                    control={control}
                    name="category"
                    rules={{
                        required: 'Please select category',
                        }}
                    render={({
                        field: { onChange, onBlur, value, name, ref},
                        fieldState: {error}
                    }) => (
                        <Dropdown
                        label={orgLabels.category}
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder="Select"
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                        customStyle={{
                            rootStyle: {
                            width: '295px',
                            marginLeft:'30px'
                            }
                        }}
                        dropdownItems={orgLabels.distributorCategoryOptions}
                        />
                    )}
                    />
                    <Controller
                    control={control}
                    name="level"
                    render={({
                        field:{value, name, ref},
                        fieldState:{error}
                    }) =>(
                        <TextInput 
                        ref={ref}
                        name={name}
                        value={value}
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                        customStyle={{
                            rootStyle: {
                            marginLeft:'30px'
                            }
                        }} 
                        label={orgLabels.level}
                        readOnly
                        />
                    )}
                    />
                    <Controller
                    control={control}
                    name="organizationNameInFrench"
                    rules={{
                        required: 'Please enter Organization Name in French',
                    }}
                    render={({
                        field:{onChange, onBlur, value, name, ref},
                        fieldState:{error}
                    }) =>(
                        <TextInput
                        ref={ref}
                        name={name}
                        value={value}
                        onChange={onChange}
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]} 
                        customStyle={{
                            rootStyle: {
                                width: '450px',
                                marginLeft:'30px'
                            }
                        }} 
                    label={orgLabels.organizationNameInFrench}
                    />
                    )}
                    />
                    
                    <Button
                    type='submit'
                     customStyle={{
                       buttonStyle: {
                            marginTop:'20px',
                            marginLeft:'30px'
                        }
                    }}
                    >Save</Button>
                </div>
            </form>
            </Modal>
        </div>
    )
}

export default OrganizationModal
