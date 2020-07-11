import { Segments, celebrate, Joi } from "celebrate";

export const ListTechValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    search: Joi.string(),
  }),
});

export const CreateTechValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  }),
});

export const DeleteTechValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
