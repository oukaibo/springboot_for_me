package com.my.springboot_test;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;

/**
 * 读取配置文件中的配置信息的工具类，提供动态读取和初始化读取
 */
public class PropertiesUtil {
    private static Logger logger = LoggerFactory.getLogger(PropertiesUtil.class);
    private static Properties props;
    private static final String fileName = "datasourceBeta.properties";

    static {
        // 获得配置文件
        props = new Properties();
        try {
            // 通过静态块获取classpath下的配置文件
            props.load(new InputStreamReader(PropertiesUtil.class.getClassLoader().getResourceAsStream(fileName), "UTF-8"));
        } catch (IOException e) {
            logger.error("配置文件读取异常", e);
        }
    }
    
    /**
     * 获得指定key的value值
     */
    public static String getProperty(String key){
        String value = props.getProperty(key.trim());
        if(StringUtils.isBlank(value)){
            return null;
        }
        return value.trim();
    }
    
    /**
     * 获得指定key的value如果获得的是空值，则使用传入的默认值
     */
    public static String getProperty(String key, String defaultValue){
        String value = props.getProperty(key.trim());
        if(StringUtils.isBlank(value)){
            value = defaultValue;
        }
        return value.trim();
    }

    /**
     * 获得指定key的value(热加载)
     * @param key
     * @return
     */
    public static String getDynamicalProperty(String key) {
        try {
            Properties dynamicalProps = new Properties();
            dynamicalProps.load(new InputStreamReader(PropertiesUtil.class.getClassLoader().getResourceAsStream(fileName), "UTF-8"));
            String value = dynamicalProps.getProperty(key.trim());
            if (StringUtils.isBlank(value)) {
                return null;
            }
            return value.trim();
        } catch (IOException e) {
            logger.error("动态配置文件读取异常", e);
            return null;
        }

    }

    /**
     * 获得指定key的value(热加载)
     * @param key
     * @param defaultValue 默认值
     * @return
     */
    public static String getDynamicalProperty(String key, String defaultValue) {
        try {
            Properties dynamicalProps = new Properties();
            dynamicalProps.load(new InputStreamReader(PropertiesUtil.class.getClassLoader().getResourceAsStream(fileName), "UTF-8"));
            String value = dynamicalProps.getProperty(key.trim());
            if (StringUtils.isBlank(value)) {
                return defaultValue;
            }
            return value.trim();
        } catch (IOException e) {
            logger.error("动态配置文件读取异常", e);
            return null;
        }

    }

}
