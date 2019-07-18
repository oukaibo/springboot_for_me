package com.my.springboot_test;

import org.springframework.stereotype.Service;

import java.io.File;
import java.net.URL;
import java.net.URLConnection;
import java.util.UUID;

@Service
public class FinishFormPrintServiceImpl implements FinishFormPrintService{

//	public ServerResponse htmlToPdf(HttpServletResponse res, String httpUrl, String downName) {
//		//判断路径是否存在，不存在则创建
//		File fileDir = new File(httpUrl);
//		File waterFileDir = new File(downName);
//		if (!fileDir.exists()) {
//			fileDir.setWritable(true);
//			fileDir.mkdirs();
//		}
//		if (!waterFileDir.exists()) {
//			waterFileDir.setWritable(true);
//			waterFileDir.mkdirs();
//		}
//		String fileName = UUID.randomUUID().toString() + ".pdf";
//		String source = httpUrl + fileName;
////		String outPath = downName + fileName;
//		try {
//			//调用HtmlToPdfUtilz中的convent的方法使html生成pdf
//			boolean isSuccess = HtmlToPdfUtil.convert(httpUrl, source,systemOs);
//			if (isSuccess) {
//				//水印加密
//				//  HtmlToPdfUtil.setWaterMarkForPDF(source,outPath,"");
//				download(res, downName, fileName);
//			} else {
//				throw new MyException("pdf下载异常");
//			}
//
//		} catch (Exception e) {
//			response.setMsg(e.getMessage());
//			response.setStatus(ResultHttpStatus.INTERNAL_ERROR.getValue());
//		}
//		return new ServerResponse("1","1");
//	}
	@Override
	public ServerResponse toPDF(String targetPath,String webpage,String type) {
		//判断路径是否存在，不存在则创建
		File fileDir = new File(targetPath);
		if (!fileDir.exists()) {
			fileDir.setWritable(true);
			fileDir.mkdirs();
		}
		targetPath=fileDir.getAbsolutePath();
		String formUid = UUID.randomUUID().toString();
		String path = "";
		String system = System.getProperty("os.name");
		String pdfPath = "";

		if (system.contains("Windows")) {
			if(type=="报销单"){
				path="http://localhost:8888/index";
			}else if(type=="借款单"){
				path="http://localhost:8888/loanBillPrint";
			}


			pdfPath = targetPath;
		} else if (system.contains("Linux")) {
//			path = "http://"+sftpIp+"/lyfbpm/finishFormPrint/toPrint?formUid="+formUid;
//			pdfPath = sftpPath+"/AccessoryFile/form/";
		}
		String pdfName = formUid + ".pdf";
		ServerResponse response = HtmlToPdf.getCommand(path, pdfPath +"\\"+pdfName);
		if (response.isSuccess()) {
			String destPath = "";
			if (system.contains("Windows")) {

				destPath = "http://localhost:8888/static/"+pdfName;
			} else if (system.contains("Linux")) {
//				destPath = "http://"+sftpIp+"/bpmdata/AccessoryFile/form/" + pdfName;
			}
			try {
				URL url=new URL(destPath);
				URLConnection conn=url.openConnection();
				String str=conn.getHeaderField(0);
				if (str.indexOf("200")> 0){
					return ServerResponse.createBySuccess(destPath);
				}else{
					return ServerResponse.createByErrorMessage(str);
				}
			} catch (Exception ex) {
				ex.printStackTrace();
				return ServerResponse.createByErrorMessage(ex.getMessage());
			}
		}else {
			return response;
		}
	}
}
