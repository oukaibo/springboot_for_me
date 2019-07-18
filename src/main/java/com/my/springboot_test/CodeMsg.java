package com.my.springboot_test;

public class CodeMsg {

    private int code;
	private String msg;
	
	//通用的错误码
	public static final CodeMsg SUCCESS = new CodeMsg(0, "success");
	public static final CodeMsg SERVER_ERROR = new CodeMsg(1, "服务端异常");


	
	
	private CodeMsg( ) {
	}
			
	private CodeMsg(int code, String msg ) {
		this.code = code;
		this.msg = msg;
	}
	
	public int getCode() {
		return code;
	}

	public String getMsg() {
		return msg;
	}

	
	public CodeMsg fillArgs(Object... args) {
		String message = String.format(this.msg, args);
		return new CodeMsg(this.code, message);
	}

	@Override
	public String toString() {
		return "CodeMsg [code=" + code + ", msg=" + msg + "]";
	}
	
	
}
