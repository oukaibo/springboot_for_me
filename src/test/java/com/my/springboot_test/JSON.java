package com.my.springboot_test;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

//@SpringBootConfiguration
//@RunWith(SpringRunner.class)
@SpringBootTest
public class JSON {
    private static final String STR_1 = "{ \"identity\": 1, \"movies\": [\"电影1\",\"电影2\"], \"age\": 29, \"createDate\": { \"data\": \"2011-06-22T13:32:22Z\", \"type\": \"datetime\" } }";
    private static final String STR_2 = "{ \"uid\": \"uuuid\", \"numbers\": [22, 33], \"times\": { \"data\": [\"2019-06-01T12:00:00Z\", \"2019-07-01T00:00:00Z\"], \"type\": \"datetime\" } }";
    private static final String STR_3 = "{ \"id\": 2, \"type\": \"类型1\", \"updateTime\": { \"data\":\"2019-06-01T12:00:00Z\", \"type\":\"datetime\" } }";
    private static final String STR_4 = "{ \"uid\": \"ddfd\", \"field1\": \"something\", \"someDate\": { \"data\":\"2015-04-06T08:05:30Z\", \"type\":\"datetime\" } }";

    @Test
    public void contextLoads() {

        JSONObject json = JSONObject.parseObject("{\"name\":\"JSON\",\"age\":\"24\",\"address\":\"北京市西城区\"}");
        System.out.println(json.get("name"));


        JSONObject jsonObject = JSONObject.parseObject(STR_1);
        StringBuffer stringBuffer = new StringBuffer();
        String tts=getAllKey(jsonObject);
        System.out.println(STR_1);
        System.out.println(tts);
    }


    public static String getAllKey(JSONObject jsonObject) {

        List<String> list=new ArrayList<>();
        List<String> list2=new ArrayList<>();
        Iterator<String> keys = jsonObject.keySet().iterator();// jsonObject.keys();
        int count=0;
        while (keys.hasNext()) {
            String key = keys.next();
            if(key.equals("data")){
                if (jsonObject.get(key) instanceof JSONArray) {
                    list=(List<String>) jsonObject.get(key);
                    for(int i=0;i<list.size();i++){
                        String sd=changeGmtTimeToDateTime(list.get(i));
                        list2.add(sd);
                    }
                    jsonObject.put("data",list2);
                }else if(jsonObject.get(key) instanceof String){
                    String date=jsonObject.getString(key);
                    String date1=changeGmtTimeToDateTime(date);
                    jsonObject.put("data",date1);
                }
                count++;
            }
            if (jsonObject.get(key) instanceof JSONObject) {
                JSONObject innerObject = (JSONObject) jsonObject.get(key);
                getAllKey(innerObject);
            } else if (jsonObject.get(key) instanceof JSONArray) {
                JSONArray innerObject = (JSONArray) jsonObject.get(key);
                getAllKey(innerObject);
            }
        }
        if(count>0){
           jsonObject.remove("type");
        }
        String  tts=JSONObject.toJSONString(jsonObject);
        return tts;
    }

    //将GMT格式的时间转换成yyyy-MM-dd HH:mm:ss格式
    public static  String changeGmtTimeToDateTime(String GMTTime) {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'", Locale.US);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        TimeZone utcZone = TimeZone.getTimeZone("UTC");
        sf.setTimeZone(utcZone);
        Date date = null;
        String dateTime = "";
        try { date = sf.parse(GMTTime);
        dateTime = sdf.format(date);
        } catch (ParseException e) {
        e.printStackTrace();
        }
       return dateTime;
    }

    public static void getAllKey(JSONArray json1) {

        if (json1 != null ) {
            Iterator i1 = json1.iterator();
            while (i1.hasNext()) {
                Object key = i1.next();
                if (key instanceof  JSONObject) {
                    JSONObject innerObject = (JSONObject) key;
                    getAllKey(innerObject);
                } else if (key instanceof JSONArray) {
                    JSONArray innerObject = (JSONArray) key;
                    getAllKey(innerObject);
                }else{

                }
            }
        }

    }

}
