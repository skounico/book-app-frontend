import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function Dashboard ({ children }: DashboardLayoutProps){
    return (
        <div>
            <h1 className='bg-blue-300'>Dashboard</h1>
            {children}
        </div>
    )
}