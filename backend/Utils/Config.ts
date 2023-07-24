class Config {
    public webPort = 5000;
    public mysql_host = "localhost";
    public mysql_user = "root";
    public mysql_password = "12345678";
    public mysql_port = 3306;
    public mysql_database = "holidays_project";
}

const config = new Config();
export default config;