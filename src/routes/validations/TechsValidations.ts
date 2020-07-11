import { Segments, celebrate, Joi } from "celebrate";

export const CreateTechValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  }),
});
