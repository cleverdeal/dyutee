import Property from "../models/Property.js";
import Room from "../models/Room.js";

export const createProperty = async (req, res, next) => {
  const newProperty = new Property(req.body);

  try {
    const saveProperty = await newProperty.save();
    res.status(200).json(saveProperty);
  } catch (err) {
    next(err);
  }
};
export const updateProperty = async (req, res, next) => {
  try {
    const updateProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateProperty);
  } catch (err) {
    next(err);
  }
};
export const deleteProperty = async (req, res, next) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProperties = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};
export const getProperty = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const property = await Property.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Property.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const propertyCount = await Property.countDocuments({ type: "property" });
    const apartmentCount = await Property.countDocuments({ type: "apartment" });
    const resortCount = await Property.countDocuments({ type: "resort" });
    const villaCount = await Property.countDocuments({ type: "villa" });
    const cabinCount = await Property.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "property", count: propertyCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getPropertyRooms = async (req, res, next) => {
  try {
    const hotel = await Property.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
