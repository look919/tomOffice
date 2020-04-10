const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const uuid = require('uuid');

const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.checkout = catchAsync(async (req, res, next) => {
  const { product, token } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  const fixedTotalPrice = (product.price * 100).toFixed(0);

  const idempotencyKey = uuid.v4();
  const charge = await stripe.charges.create(
    {
      amount: fixedTotalPrice,
      currency: 'pln',
      customer: customer.id,
      receipt_email: token.email,
      description: `TomOffice purchase`,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip,
        },
      },
    },
    {
      idempotencyKey,
    }
  );
  const doc = await Booking.create(product);

  res.status(200).json({
    status: 'success',
    charge,
    doc,
  });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
