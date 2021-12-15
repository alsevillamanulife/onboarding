import React, {useState} from 'react'
import { 
    DataTableExperimental, TextLink
    //@ts-ignore
} from '@manulife/mux';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const LICENSE_LIST = gql `
  query Licenses($where: JSON) {
  licenses(where: $where) {
    id
    ownerCode
    ownerType
    effectiveDate
    expiryDate
    status
    licenseNumber
    licenseType
    province
    agent {
      user {
        firstName
      }
    }
  }
}
`;

type Params = {
  code: string
}
const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-CL");
}

const LicenseResults = ():JSX.Element => {
  const { code } = useParams<Params>();
  const [getData, setGetData] = useState();
  const { loading, data} = useQuery(LICENSE_LIST,{
    variables: {
      where: {
          ownerCode: {
          $regex: code
        }
      }
    },onCompleted: () =>{
      setGetData(data.licenses)
    }
  });
    if (loading) return <p>Loading ...</p>;

    const sortingColumns = [{
      Header: '',
      accessor:'id',
      Cell:({
        cell:{
          //@ts-ignore
          value
        }
      }) => <TextLink to={`/license/${value}`}> Edit </TextLink>
      },
      {
        Header: 'Effective Date',
        accessor: 'effectiveDate',
        Cell:({
          cell:{
            //@ts-ignore
            value
          }
        }) => <> {getFormattedDate(value)} </>
      }, {
        Header: 'Expiry Date ',
        accessor: 'expiryDate',
        Cell:({
          cell:{
            //@ts-ignore
            value
          }
        }) => <>{getFormattedDate(value)} </>
      }, {
        Header: 'Status',
        accessor: 'status'
      },{
        Header: 'Licence Number',
        accessor: 'licenseNumber'
      },
      {
        Header: 'Licence Type',
        accessor: 'licenseType'
      },{
        Header: 'Province',
        accessor: 'province'
      },
      {
        Header: 'Agent Name',
        accessor: 'agent.user.firstName'
      },
      
    ];

    return (
        <div>
        <DataTableExperimental 
        columns={sortingColumns} 
        data={getData} 
        sorting
        pageSize={10}
         />
            
        </div>
    )
}

export default LicenseResults
