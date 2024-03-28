import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, List, Avatar } from 'antd';

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

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    function getAge(birthDate) {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const age = today.getFullYear() - birthDateObj.getFullYear();

        // Ajuster l'âge si le jour de naissance n'est pas encore passé cette année
        if (today.getMonth() < birthDateObj.getMonth()) {
            age--;
        } else if (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate()) {
            age--;
        }

        return age;
    }
    return (
        <Card style={{ width: '60%' }}>
            <h1>Liste des personnes</h1>
            <List
                pagination={{
                    defaultPageSize: 8,
                }}
                dataSource={peoples}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.firstname} {item.lastname} </a>}
                            description={`${getAge(item?.birthyear)} ans`}
                            extra={<p>yanis</p>}
                        />
                        <div>content</div>
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default Home