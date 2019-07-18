package com.my.springboot_test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class HtmlToPdfInterceptor extends Thread {
	private static Logger logger = LoggerFactory.getLogger(HtmlToPdfInterceptor.class);
    private InputStream is;
    
    public HtmlToPdfInterceptor(InputStream is){
        this.is = is;
    }
    
    public void run(){
        try{
            InputStreamReader isr = new InputStreamReader(is, "utf-8");
            BufferedReader br = new BufferedReader(isr);
            String line = null;
            while ((line = br.readLine()) != null) {
                logger.info(line.toString());
            }
        }catch (IOException e){
        	logger.error("生成预览页执行信息失败", e);
            e.printStackTrace();
        }
    }
}