namespace OrderService.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using OrderService.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<OrderService.Models.OrderServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "OrderService.Models.OrderServiceContext";
        }

        protected override void Seed(OrderService.Models.OrderServiceContext context)
        {
            context.Orders.AddOrUpdate(x => x.id,
                new Order()
                {
                    id = 1,
                    userName = "Test User",
                    itemColor = "red",
                    itemSize = "xs",
                    date = "1501934022723"
                }
                    );
        }
    }
}
