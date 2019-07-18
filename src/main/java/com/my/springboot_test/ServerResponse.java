package com.my.springboot_test;

import java.io.Serializable;


public class ServerResponse<T> implements Serializable {

    private int status;
    private String msg;
    private T data;

    private ServerResponse(int status) {
        this.status = status;
    }

    private ServerResponse(int status, T data) {
        this.status = status;
        this.data = data;
    }

    private ServerResponse(int status, String msg, T data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    private ServerResponse(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }


    // 使之不在json序列化结果当中
    public boolean isSuccess() {
        return this.status == CodeMsg.SUCCESS.getCode();
    }

    public int getStatus() {
        return status;
    }

    public T getData() {
        return data;
    }

    public String getMsg() {
        return msg;
    }

    public static <T> ServerResponse<T> createBySuccess() {
        return new ServerResponse<T>(CodeMsg.SUCCESS.getCode());
    }

    public static <T> ServerResponse<T> createBySuccessMessage(String msg) {
        return new ServerResponse<T>(CodeMsg.SUCCESS.getCode(), msg);
    }

    public static <T> ServerResponse<T> createBySuccess(T data) {
        return new ServerResponse<T>(CodeMsg.SUCCESS.getCode(), data);
    }

    public static <T> ServerResponse<T> createBySuccess(String msg, T data) {
        return new ServerResponse<T>(CodeMsg.SUCCESS.getCode(), msg, data);
    }

    public static <T> ServerResponse<T> createByError() {
        return new ServerResponse<T>(CodeMsg.SERVER_ERROR.getCode(), CodeMsg.SERVER_ERROR.getMsg());
    }

    public static <T> ServerResponse<T> createByErrorMessage(String errorMessage) {
        return new ServerResponse<T>(CodeMsg.SERVER_ERROR.getCode(), errorMessage);
    }

    public static <T> ServerResponse<T> createByErrorCodeMessage(int errorCode, String errorMessage) {
        return new ServerResponse<T>(errorCode, errorMessage);
    }

    public static <T> ServerResponse<T> createByErrorCodeAndData(int errorCode, String errorMessage, T data) {
        return new ServerResponse<T>(errorCode, errorMessage, data);
    }

    /**
     * 成功时调用
     * @return
     */
    public static <T> ServerResponse success() {
        return new ServerResponse<T>(CodeMsg.SUCCESS.getCode());
    }

    /**
     * 指定错误码的返回信息
     * @param codeMsg
     * @return
     */
    public static <T> ServerResponse error(CodeMsg codeMsg) {
        if (codeMsg != null) {
            return new ServerResponse<T>(codeMsg.getCode(), codeMsg.getMsg());
        } else {
            return error(CodeMsg.SERVER_ERROR);
        }
    }

}