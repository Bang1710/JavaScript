let coursesAPI = 'http://localhost:3000/courses';

fetch(coursesAPI) 
    .then((response) => {
        return response.json()
    })
    .then((course) => {
        console.log(course)
    })