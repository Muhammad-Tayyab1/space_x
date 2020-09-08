import * as React from 'react';
import { useLaunchDetailsQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

interface OwnProps {
  id: number;
}

const LaunchDetailsContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchDetailsQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;
