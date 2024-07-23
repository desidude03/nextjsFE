import { atom } from 'recoil';

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    telephone: string;
    address: string;
    ssn: string;
}

export const userState = atom<User[]>({
    key: 'userState',
    default: [],
});
