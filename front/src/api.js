import axios from 'axios';

const baseUrl = 'https://invictusgo-staging.herokuapp.com/api/';

export const signupCoach = (coach) => {
    return axios.post(baseUrl + 'coaches', coach, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err); 
}

export const createClub = (club) => {
    return axios.post(baseUrl + 'clubs', club, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err); 
}

export const createSubscription = (subscription) => {
    return axios.post(baseUrl + 'subscriptions', subscription, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err); 
}

export const createQuestion = (faq) => {
    return axios.post(baseUrl + 'faq', faq, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err); 
}

export const createPost = (post) => {
    return axios.post(baseUrl + 'create-new', post, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
            }
    }).then(response => response).catch(err => err); 
}

export const getClubs = () => {
    return axios.get(baseUrl + 'clubs').then(response => response).catch(err => err);
}

export const getClub = (id) => {
    return axios.get(baseUrl + 'clubs?clubId=' + id).then(response => response).catch(err => err);
}

export const getCoachs = () => {
    return axios.get(baseUrl + 'coaches').then(response => response).catch(err => err);
}

export const getSubscriptions = () => {
    return axios.get(baseUrl + 'subscriptions').then(response => response).catch(err => err);
}

export const getFaq = () => {
    return axios.get(baseUrl + 'faq').then(response => response).catch(err => err);
}

export const getNews = () => {
    return axios.get(baseUrl + 'news').then(response => response).catch(err => err);
}

export const deleteClub = (id) => {
    return axios.delete(baseUrl + 'clubs?clubId=' + id, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err);
}

export const updateClub = (club) => {
    return axios.put(baseUrl + 'clubs?clubId=' + club.clubId, club, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
            }
    }).then(response => response).catch(err => err); 
}

export const updateSubscription = (subscription) => {
    return axios.put(baseUrl + 'subscriptions?' + subscription.type, subscription, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
            }
    }).then(response => response).catch(err => err); 
}

export const deleteFaq = (question) => {
    return axios.delete(baseUrl + 'faq?question=' + question, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err);
}

export const updateFaq = (faq) => {
    return axios.put(baseUrl + 'faq?question=' + faq.question, faq, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
            }
    }).then(response => response).catch(err => err); 
}

export const deleteCoach = (memberId) => {
    return axios.delete(baseUrl + 'coaches?memberId=' + memberId, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
        }
    }).then(response => response).catch(err => err);
}

export const updateCoach = (coach) => {
    return axios.put(baseUrl + 'coaches', coach, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDAzMWJkMDAxOTI2MmQ4Y2FmMjZhZiIsImVtYWlsIjoiZXNib2wyMDAxMDNAZ21haWwuY29tIn0sImlhdCI6MTYyNDk1NTUzMH0.WZ9U7ks1vV-jd1ZikHFdtHc6A2WyZJpQui3fhzHSAHg'
            }
    }).then(response => response).catch(err => err); 
}

<<<<<<< HEAD
export const addContractMember = (data) => {
    return axios.post('https://invictusgo.perfectgym.com/Api/v2/Members/AddContractMember', data, {
        headers:{
            "X-Client-Id": "b57bf58a7d254458979123d0a36087ff",
            "X-Client-Secret" : "bc3a5b145f9142b1b4b2115bf2d03e2ee1f3994cc03a405b812c7f4dbdba4c1c"
        }   
    }).then(response => response.data).catch(err => err);
}

export const payment = (data) => {
    return axios.post('https://invictusgo.perfectgym.com/Api/v2/Members/AddContractMember', data, {
        headers:{
            "X-Client-Id": "b57bf58a7d254458979123d0a36087ff",
            "X-Client-Secret" : "bc3a5b145f9142b1b4b2115bf2d03e2ee1f3994cc03a405b812c7f4dbdba4c1c"
        }   
    }).then(response => response.data).catch(err => err);
}
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
