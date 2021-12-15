import React from 'react';
import { H3
    //@ts-ignore
    } from '@manulife/mux';

import OrganizationResult from '../component/OrganizationResult';
import OrganizationModal from '../component/OrganizationModal';

const Organization = ():JSX.Element => {
    return (
        <div>
            <div className='row'>
                <div className='organizationFloat'>
                <H3>Organization</H3>
                <OrganizationModal/>
                </div>
            </div>
            <div className='row'>
                <div>
                    <OrganizationResult/>
                </div>
            </div>
        </div>
    )
}

export default Organization
