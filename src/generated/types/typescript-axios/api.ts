/* tslint:disable */
/* eslint-disable */
/**
 * The_13th_priority_api
 * API for The_13th_priority
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * ユーザーが本登録済みかどうか
 * @export
 * @interface CompletedSignUp
 */
export interface CompletedSignUp {
    /**
     * 
     * @type {boolean}
     * @memberof CompletedSignUp
     */
    'completed_sign_up'?: boolean;
}
/**
 * 登録する際にリクエストに含めるユーザー情報
 * @export
 * @interface CreateUser
 */
export interface CreateUser {
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'slack_id': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'hobby'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUser
     */
    'introduction'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUser
     */
    'is_admin': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUser
     */
    'completed_sign_up'?: boolean;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    'code': number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
}
/**
 * 更新する際にリクエストに含めるユーザー情報
 * @export
 * @interface UpdateUser
 */
export interface UpdateUser {
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'slack_id': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'hobby'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    'introduction'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUser
     */
    'is_admin': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUser
     */
    'completed_sign_up'?: boolean;
}
/**
 * レスポンスで返すユーザー情報
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'slack_id': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'hobby'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'introduction'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'is_admin': boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id': string;
}
/**
 * ユーザー関連スキーマの共通部分
 * @export
 * @interface UserBase
 */
export interface UserBase {
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'slack_id': string;
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'hobby'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserBase
     */
    'introduction'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserBase
     */
    'is_admin': boolean;
}
/**
 * ユーザーのID
 * @export
 * @interface UserId
 */
export interface UserId {
    /**
     * 
     * @type {string}
     * @memberof UserId
     */
    'id'?: string;
}
/**
 * ログインユーザーの情報
 * @export
 * @interface Userinfo
 */
export interface Userinfo {
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'slack_id': string;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'hobby'?: string;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'introduction'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Userinfo
     */
    'is_admin': boolean;
    /**
     * 
     * @type {string}
     * @memberof Userinfo
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof Userinfo
     */
    'completed_sign_up': boolean;
}

/**
 * UserInfoApi - axios parameter creator
 * @export
 */
export const UserInfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 自分のユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/userinfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserInfoApi - functional programming interface
 * @export
 */
export const UserInfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserInfoApiAxiosParamCreator(configuration)
    return {
        /**
         * 自分のユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoginUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Userinfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoginUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserInfoApi - factory interface
 * @export
 */
export const UserInfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserInfoApiFp(configuration)
    return {
        /**
         * 自分のユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginUser(options?: any): AxiosPromise<Userinfo> {
            return localVarFp.getLoginUser(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserInfoApi - object-oriented interface
 * @export
 * @class UserInfoApi
 * @extends {BaseAPI}
 */
export class UserInfoApi extends BaseAPI {
    /**
     * 自分のユーザー情報取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserInfoApi
     */
    public getLoginUser(options?: AxiosRequestConfig) {
        return UserInfoApiFp(this.configuration).getLoginUser(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ユーザー情報登録
         * @param {CreateUser} createUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (createUser: CreateUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUser' is not null or undefined
            assertParamExists('createUser', 'createUser', createUser)
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 全ユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザー情報1件更新
         * @param {string} id ユーザーを識別するID
         * @param {UpdateUser} updateUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (id: string, updateUser: UpdateUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUser', 'id', id)
            // verify required parameter 'updateUser' is not null or undefined
            assertParamExists('updateUser', 'updateUser', updateUser)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * ユーザー情報登録
         * @param {CreateUser} createUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(createUser: CreateUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(createUser, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 全ユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザー情報1件更新
         * @param {string} id ユーザーを識別するID
         * @param {UpdateUser} updateUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(id: string, updateUser: UpdateUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(id, updateUser, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * ユーザー情報登録
         * @param {CreateUser} createUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(createUser: CreateUser, options?: any): AxiosPromise<User> {
            return localVarFp.createUser(createUser, options).then((request) => request(axios, basePath));
        },
        /**
         * 全ユーザー情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<User>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザー情報1件更新
         * @param {string} id ユーザーを識別するID
         * @param {UpdateUser} updateUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(id: string, updateUser: UpdateUser, options?: any): AxiosPromise<User> {
            return localVarFp.updateUser(id, updateUser, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * ユーザー情報登録
     * @param {CreateUser} createUser 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createUser(createUser: CreateUser, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).createUser(createUser, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 全ユーザー情報取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUsers(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザー情報1件更新
     * @param {string} id ユーザーを識別するID
     * @param {UpdateUser} updateUser 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(id: string, updateUser: UpdateUser, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateUser(id, updateUser, options).then((request) => request(this.axios, this.basePath));
    }
}


