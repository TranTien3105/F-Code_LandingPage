import { post, get } from './ApiCaller';

export const getStep = () => {
    const url = `/auth/getStep`;
    return get(
        url,
        {},
        {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    );
};

export const getLogin = () => {
    const url = `/login/student`;
    return get(url);
};

export const postRegister = (form) => {
    const url = `/student/register`;
    return post(
        url,
        form,
        {},
        {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    );
};
// export const getStudentAll = () => {
//     const url = `/sheet`;
//     return get(url, {}, {});
// };

export const getChallenge = () => {
    const url = `/api/challenges`;
    return get(url, {}, {});
};
export const getAllBlog = () => {
    const url = `/article/all`;
    return get(url);
};
export const getGenreById = (id) => {
    const url = `/article/genre/${id}`;
    return get(url);
};
