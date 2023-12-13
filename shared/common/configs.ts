export default class BearConfig {
    static STATUS_DELETED = -1;
    static STATUS_PRIVATE = 0;
    static STATUS_PUBLIC = 1;
    static STATUS_TESTING = 2;
    static STATUS_WAITING = 3;
    static STATUS_APPROVED = 4;
    static STATUS_REJECTED = 5;

    static LOGIN_FAILED = -1;
    static LOGIN_SUCCESS = 0;
    static LOGIN_ACCOUNT_IS_USED = 1;
    static LOGIN_ACCOUNT_NOT_EXIST = 2;
    static LOGIN_WRONG_PASSWORD = 3;
    static LOGIN_WRONG_PROVIDER = 4;
    static LOGIN_ACCOUNT_NOT_ACTIVATED = 5;
    static LOGIN_MOBILE_IS_USED = 6;
    static LOGIN_USER_NOT_GRANTED_PERMISSION = 7;
    static LOGIN_TOKEN_INVALID = 8;
    static LOGIN_WAIT_FOR_EMAIL_VERIFICATION = 9;


    static REGISTER_FAILED = -1;
    static REGISTER_SUCCESS = 0;
    static REGISTER_ACCOUNT_IS_USED = 1;
}