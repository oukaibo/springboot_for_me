package com.my.springboot_test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HtmlToPdf {
	private static Logger logger = LoggerFactory.getLogger(HtmlToPdf.class);
	public static ServerResponse getCommand(String sourceFilePath, String targetFilePath) {
		logger.info("开始打印");
		String system = System.getProperty("os.name");
		String command = "";
		if (system.contains("Windows")) {
			command = "E:/wkhtmltopdf/bin/wkhtmltopdf.exe " + sourceFilePath + " \"" + targetFilePath+"\"";
		} else if (system.contains("Linux")) {
			command = "wkhtmltopdf " + sourceFilePath + " " + targetFilePath;
		}
		logger.info(command);
		Process process;
		try {
			process = Runtime.getRuntime().exec(command);
			HtmlToPdfInterceptor error = new HtmlToPdfInterceptor(process.getErrorStream());
            HtmlToPdfInterceptor output = new HtmlToPdfInterceptor(process.getInputStream());
            error.start();
            output.start();
			process.waitFor();
		} catch (Exception e) {
			logger.info("生成打印预览页失败",e);
			logger.error("生成打印预览页失败",e);
			e.printStackTrace();
			return ServerResponse.createByErrorMessage(command + e.getMessage());
		}
		return ServerResponse.createBySuccess();
	}
//	E:/wkhtmltopdf/bin/wkhtmltopdf.exe http://localhost:8888/index F:/Intellij WorkSpace/springboot_for_me/src/main/resources/static/6ad3bff1-a0e4-443a-9a08-ecbf03926df8.pdf

	/*public static boolean convert(String srcPath, String destPath){
    	File file = new File(destPath);
        File parent = file.getParentFile();
        //如果pdf保存路径不存在，则创建路径
        if(!parent.exists()){
            parent.mkdirs();
        }

        StringBuilder cmd = new StringBuilder();
        cmd.append(toPdfTool);
        cmd.append(" ");
        cmd.append("  --header-line");//页眉下面的线
        cmd.append("  --header-center 这里是页眉 ");//页眉中间内容
        //cmd.append("  --margin-top 30mm ");//设置页面上边距 (default 10mm)
        cmd.append(" --header-spacing 10 ");//    (设置页眉和内容的距离,默认0)
        cmd.append(srcPath);
        cmd.append(" ");
        cmd.append(destPath);

        boolean result = true;
        try{
            Process proc = Runtime.getRuntime().exec(cmd.toString());
            HtmlToPdfInterceptor error = new HtmlToPdfInterceptor(proc.getErrorStream());
            HtmlToPdfInterceptor output = new HtmlToPdfInterceptor(proc.getInputStream());
            error.start();
            output.start();
            proc.waitFor();
        }catch(Exception e){
        	logger.error("生成预览页失败",e);
            result = false;
        }
        return result;
    }  */
}

