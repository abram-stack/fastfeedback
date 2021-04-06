import Head from 'next/head'
import useSWR from 'swr';

import { useAuth } from '@/lib/auth'
import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher'
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '../components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';

export default function Dashboard() {

  const { user } = useAuth();
  // if thers user, we call backend
  // send multiple information with the req, using []
  // update fetcher function
  const { data } = useSWR(user ? ['/api/sites', user.token] : null , fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader/>
        <SiteTableSkeleton />
      </DashboardShell>)
  }
    
    
  return (
    <DashboardShell>
      <SiteTableHeader/>
      {data.sites ? <SiteTable sites={data.sites}/> : <EmptyState/>}
    </DashboardShell>
  )
}
