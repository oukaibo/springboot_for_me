package com.my.springboot_test;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * 打印控制器
 * @author oukaibo
 * @since 2018年6月26日
 */
@Controller
@RequestMapping(value = "/rbPrint")
public class FinishFormPrintController {
	private static final Logger LOG = LoggerFactory.getLogger(FinishFormPrintController.class);
	@Autowired
	private FinishFormPrintService finishFormPrintService;

	@Autowired
	private HttpServletRequest request;
	@RequestMapping("/toPDF")
	@ResponseBody
	public ServerResponse toPDF(String webpage) {
        String pathStr=request.getServletContext().getRealPath("/");
		return finishFormPrintService.toPDF(pathStr,webpage,"借款单");
	}


	public static void main(String[] args) {
		FinishFormPrintController a=new FinishFormPrintController();
		a.toPDF("1");
	}
}
