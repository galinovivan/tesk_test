using System;


namespace OrderService.Models
{
    public class Order
    {
        public int id { get; set; }
        public String userName { get; set; }
        public String itemColor { get; set; }
        public String itemSize { get; set; }
        public String date { get; set; }
    }
}