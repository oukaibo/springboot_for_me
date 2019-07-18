package com.my.springboot_test;

import com.alibaba.fastjson.JSONObject;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.DigestUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@SpringBootTest
public class MD5 implements Filter {


    protected FilterConfig filterConfig = null;
    private String redirectURL = null;
    private List notCheckURLList = new ArrayList();
    private String sessionKey = null;
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request= (HttpServletRequest) servletRequest;
        HttpServletResponse response= (HttpServletResponse) servletResponse;
        HttpSession session=request.getSession();
        if(sessionKey!=null){
            chain.doFilter(request,response);
            return;
        }//已经登录放行

    }
    //判断当前uri是否需要权限
    private boolean checkRequestUriInNotFilterList(HttpServletRequest request){

        return false;
    }


    private static final String appId = "userCenter";
    private static  final  String foo = "xxx";
    private static  final  String bar = "yyy";
    private static  final  String foo_var = "zzz";
    private static  final  String foobar = "ppp";
    private static  final  String sign = "63843785634785634785634786FIA2";
    @Test
    public  void test(){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("appId","userCenter");
        jsonObject.put("foo","xxx");
        jsonObject.put("bar","yyy");
        jsonObject.put("foo_var","zzz");
        jsonObject.put("foobar","ppp");
        List<String> list = new ArrayList<>(jsonObject.keySet());
        List<String> sortList = new ArrayList();
        Collections.sort(list);
        for (String item:list) {
            sortList.add(item);
        }
        String str ="";
        for (String item :sortList ) {
            str+=item+jsonObject.get(item);
        }
        System.out.println(str);
        str = "123"+str+"123";

        byte[] s = DigestUtils.md5Digest(str.getBytes());
        StringBuffer sb  = new StringBuffer();
        for (int i=0;i<s.length;i++){
            String hex =Integer.toHexString(s[i] & 0xFF);
            if(sign.length()<2){
                sb.append(0);
            }
            sb.append(hex);
        }
        String sign = sb.toString().toUpperCase();
        System.out.println(sign);
    }

}