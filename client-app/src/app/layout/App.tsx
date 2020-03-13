import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { LoadingComponent } from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';

const App = () => {
	const activityStore = useContext(ActivityStore)

	useEffect(() => {
		activityStore.loadActivities();
	}, [activityStore]); // second param empty array stops useEffect from continuously running and only runs once NB this is because everytime component is rendered useEffect would be called

	if (activityStore.loadingInitial) {
		return <LoadingComponent content='Loading activities...' />
	}

	return (
		<Fragment>
			<NavBar />
			<Container style={{ marginTop: '7em' }}>
				<ActivityDashboard />
			</Container>
		</Fragment>
	);
};

export default observer(App);
