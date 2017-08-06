using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using OrderService.Models;
using System.Web.Http.Cors;

namespace OrderService.Controllers
{
    public class OrdersController : ApiController
    {
        private OrderServiceContext db = new OrderServiceContext();

        // GET: api/Orders
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IQueryable<Order> GetOrders()
        {
            return db.Orders;
        }

        // POST: api/Orders
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Order))]
        public async Task<IHttpActionResult> PostOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Orders.Add(order);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = order.id }, order);
        }

    }
}