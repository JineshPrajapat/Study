import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './fetcher';
const Courseinfo = () => {
    const [course, setcourses] = React.useState({ errorMessage: '', data: {} });
    const { courseId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(courseId);
            setcourses(responseObject);
        }
        fetchData();
    }, [courseId]);

    return (
        <div className='course-info'>
            <div className='course-info-courinfo'>
                <h6>{course.data.title}</h6>
                        <h4>{course.data.courinfo?.heading}</h4>
                        <h3>{course.data.courinfo?.headline}</h3>
                        <h1>{course.data.courinfo?.student}</h1>
                        <h1>Created by {course.data.courinfo?.createby}</h1>
            </div>
            <div className='course-info-element'>
                <h1>{course.data.element?.created_date}</h1>
                <h1>{course.data.element?.language}</h1>
                <h1>{course.data.element?.caption}</h1>
            </div>
        </div>
    )
}

export default Courseinfo;