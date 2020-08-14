import request from '@/utils/request'

export function fetchUserData() {
    return request.get('https://api.github.com/users/woai3c')
}