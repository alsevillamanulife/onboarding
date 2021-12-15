import React from 'react'
import { Card, H3
    //@ts-ignore
    } from '@manulife/mux';
import OrganizationFormUpdate from '../component/OrganizationFormUpdate';
import LicenseModal from '../component/LicenseModal';

const OrganizationUpdate = ():JSX.Element => {
    return (
        <div>
            <Card customStyle={{
            cardStyle: {
                marginTop: '30px'
                }
            }}>
            <Card.Header withAdornment>
                <H3>Organization</H3>
                </Card.Header>
                <Card.Content>
                <OrganizationFormUpdate/>
                </Card.Content>
            </Card>
            
            <LicenseModal/>
        </div>
    )
}

export default OrganizationUpdate
