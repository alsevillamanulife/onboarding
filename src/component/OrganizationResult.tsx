import React from 'react'
import { 
    DataTableExperimental, TextLink
    //@ts-ignore
} from '@manulife/mux';
import { useQuery, gql } from '@apollo/client';

const ORGANZATION_LIST = gql `
  query Organizations {
    organizations(offset:1, limit:1000) {
    code
    organizationName
    status
    category
    }
  }
`;

const OrganizationResult = ():JSX.Element => {
  
  const { loading, data} = useQuery(ORGANZATION_LIST);
  if (loading) return <p>Loading ...</p>;

  const sortingColumns = [{
    Header: 'Organization Code',
    accessor: 'code',
    Cell:({
      cell:{
        //@ts-ignore
        value
      }
    }) => <TextLink to={`/organization/${value}`}> {value} </TextLink>
  }, {
    Header: 'Distributor Name ',
    accessor: 'organizationName'
  }, {
    Header: 'Organization Status',
    accessor: 'status'
  },{
    Header: 'Distributor Category',
    accessor: 'category'
  }];

    return (
        <DataTableExperimental 
        columns={sortingColumns} 
        data={data.organizations} 
        sorting
        pageSize={10}
        filtering
         />
    )
  }

export default OrganizationResult
