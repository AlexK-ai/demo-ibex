export default class EnvironmentConfig {
    public static readonly BASE_URL = process.env.BASE_URL as string;
    public static readonly LOGIN_PAGE = process.env.BASE_URL as string + '/login';
    public static readonly DEFAULT_USERNAME = process.env.DEFAULT_USERNAME as string;
    public static readonly  DEFAULT_PASSWORD= process.env.DEFAULT_PASSWORD as string;
}

