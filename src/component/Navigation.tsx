import { 
    SideNav, THEMES, UtilityHeader, HeaderButton
    //@ts-ignore
} from '@manulife/mux';
import { ThemeProvider } from 'styled-components';
import { 
    Airplane, Reception, Tool2
    //@ts-ignore
} from '@manulife/mux-cds-icons';

const Navigation = () => {
    return (
        <>
            <UtilityHeader>
                <HeaderButton
                label="Policy Maintenance"
                />
                <HeaderButton
                label="Organization"
                />
                <HeaderButton 
                label="Program"
                />
                <HeaderButton
                label="Plan"
                />
                <HeaderButton
                label="Benefit"
                />
                <HeaderButton
                label="Utilities"
                />
                <HeaderButton/>
            </UtilityHeader>
            <ThemeProvider theme={THEMES.globalTheme}>
                <SideNav id="sidenav">
                    <SideNav.Section id="business">
                        <SideNav.NavItem icon={<Airplane/>} as="button" label="Travel Insurance" itemKey="1" />
                        <SideNav.NavItem icon={<Reception/>}as="button" label="Policy Maintenance" itemKey="2" />
                        <SideNav.NavItem icon={<Tool2/>}as="button" label="Confiuration" itemKey="3" />
                    </SideNav.Section>
                </SideNav>   
            </ThemeProvider>
        </>
    )
}

export default Navigation;