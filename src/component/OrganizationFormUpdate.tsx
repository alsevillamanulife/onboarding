import React, {useState} from 'react'
import { Button, TextInput, Dropdown
    //@ts-ignore
    } from '@manulife/mux';
import { useAlert } from 'react-alert';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import '../App.css';
import { organizationLabels } from '../labels/organizationLabels';

interface FormInput {
    id:string,
    code:string,
    status:string
    organizationName:string,
    category:string
    organizationNameInFrench:string,
    level:string,
    moneris: string,
    paymentGateway: string
}
type Params = {
    code: string
}

const RETRIEVE_ORGANIZATION = gql`
    query retrieveOrganization($organizationCode: String!) {
        organization(organizationCode: $organizationCode) {
        id
        code
        status
        organizationName
        category
        organizationNameInFrench
        moneris {
            apiToken
            profileId
            storeId
        }
        paymentGateway
        }
    }
`;

const UPDATE_ORGANIZATION = gql`
    mutation Mutation($updateOrganizationId: ID!, $input: UpdateOrganizationInput!) {
        updateOrganization(id: $updateOrganizationId, input: $input) {
            id
        }
    }
`;

const OrganizationFormUpdate = ():JSX.Element => {
    const { code } = useParams<Params>();
    const alert = useAlert();
    const [getData, setGetData] = useState({
        id:'',
        code:'',
        status:'',
        organizationName:'',
        category:'',
        organizationNameInFrench:'',
        level:'N/A',
        moneris: '',
        paymentGateway: 'MONERIS'
    });
    const {
        organization: { labels: orgLabels }
    } = organizationLabels;
    
    const { control, handleSubmit, reset } = useForm<FormInput>({
        defaultValues:{
            level:'1'
        }
    })
    const { loading, data} = useQuery(RETRIEVE_ORGANIZATION,{
        variables: {
            organizationCode: code,
        }, onCompleted: () => {
            setGetData(data.organization); 
            reset(data.organization)
        }
    });
    const [updateOrg] = useMutation(UPDATE_ORGANIZATION,{
        variables: {
            updateOrganizationId: getData.id,
            input:{
                status: getData.status,
                organizationName: getData.organizationName,
                category: getData.category,
                organizationNameInFrench: getData.organizationNameInFrench,
                moneris: getData.moneris ? null : getData.moneris,
                paymentGateway: getData.paymentGateway
            }
        }
    })
    const onSubmit:SubmitHandler<FormInput> = async data => {
        console.log(data);
        try{
            setGetData(data);
            await updateOrg();
            alert.success('Data Saved!');
        }catch(e){
            alert.error((e as Error).message);
        }
    }

    if (loading) {
        return <p>Loading ...</p>
    };
    
    return (
        <div>
            <div className='row'>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <Controller 
                    control={control}
                    name="code"
                    render={({
                        field: {onChange, onBlur, value, name, ref},
                        fieldState:{ error },
                    }) => (
                        <TextInput
                        label={orgLabels.code}
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        errors={error && [{ id: `error-${name}`, isError: true, msg: error.message }]}
                        readOnly
                        disabled
                        customStyle={{
                            rootStyle: {
                                width: '310px',
                                marginLeft:'3%'
                                }
                        }}
                        />
                    )}
                />
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
                            width: '310px',
                            marginLeft:'3%'
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
                            width: '550px',
                            marginLeft:'3%'
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
                            width: '310px',
                            marginLeft:'3%'
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
                            width: '310px',
                            marginLeft:'3%'
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
                                width: '550px',
                                marginLeft:'3%'
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
                            marginLeft:'3%'
                        }
                    }}
                    >Save</Button>
                </div>
            </form>
            
        </div>
    </div>
    )
}

export default OrganizationFormUpdate
