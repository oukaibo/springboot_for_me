package com.my.springboot_test;


/**
 * 已办页面表单打印的业务逻辑层
 * @author loser_wu
 * @since 2018年6月26日
 */
public interface FinishFormPrintService {


	/**
	 * 将表单内容生成为pdf的方法
	 * @param webpage
	 * @return
	 */
    ServerResponse toPDF(String webRootPath, String webpage,String type);
}
