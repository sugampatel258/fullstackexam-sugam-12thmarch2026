import Order from "../../models/Order";

const dailyRevenue = async (req, res) => {
  const result = await Order.knex().raw(`
    SELECT 
      DATE(created_at) AS day,
      SUM(total_amount) AS revenue
    FROM orders
    WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    GROUP BY day
    ORDER BY day ASC
  `);

  res.json(result[0]);
};

const topSpenders = async (req, res) => {
  const result = await Order.knex().raw(`
      SELECT 
        users.id,
        users.name,
        SUM(orders.total_amount) AS total_spent
      FROM users
      JOIN orders ON users.id = orders.user_id
      GROUP BY users.id
      ORDER BY total_spent DESC
      LIMIT 3
    `);

  res.json(result[0]);
};

export const reportService = {
  dailyRevenue,
  topSpenders,
};
