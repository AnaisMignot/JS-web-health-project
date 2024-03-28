import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';

function Home() {
    const dispatch = useDispatch();
    const { peoples, physiologicalData, physicalActivities, error, notFound } = useSelector((state) => state.health);

    console.log('peoples-------->', peoples);
    console.log('physiologicalData-------->', physiologicalData);
    console.log('physicalActivities-------->', physicalActivities);

    useEffect(() => {
        dispatch({
            type: "health/fetchPeopleList",
        })
        dispatch({
            type: "health/fetchPhysiologicalData",
        })
        dispatch({
            type: "health/fetchPhysicalActivities",
        })
    }, []);

    return (
        <div>
            <h1>People List</h1>
            <Card>
                {peoples?.map((people) => (
                    <div key={people.id}>{people.firstname} {people.lastname}</div>

                ))}
            </Card>
        </div>
    )
}

export default Home