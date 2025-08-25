import * as Yup from 'yup';

export const flightSearchSchema = Yup.object({
  journeyType: Yup.string()
    .oneOf(['one_way', 'round_trip', 'multi_city'], 'Invalid journey type')
    .required('Journey type is required'),

  cabinClass: Yup.string()
    .oneOf(['economy', 'premium_economy', 'business', 'first'], 'Invalid cabin class')
    .required('Cabin class is required'),

    origin: Yup.object({
    label: Yup.string().required("Origin label is required"),
    skyId: Yup.string().required("Origin skyId is required"),
    entityType: Yup.string().required("Origin entityType is required"),
    entityId: Yup.string().required("Origin entityId is required"),
  })
    .nullable()
    .required("Origin is required"),

  destination: Yup.object({
    label: Yup.string().required("Destination label is required"),
    skyId: Yup.string().required("Destination skyId is required"),
    entityType: Yup.string().required("Destination entityType is required"),
    entityId: Yup.string().required("Destination entityId is required"),
  })
    .nullable()
    .required("Destination is required"),


  passengers: Yup.object({
    adults: Yup.number()
      .min(1, 'At least 1 adult is required')
      .max(9, 'Maximum 9 adults allowed')
      .required('Adults is required'),

    children: Yup.number()
      .min(0, 'Children cannot be negative')
      .max(9, 'Maximum 9 children allowed')
      .required(),

    infants: Yup.number()
      .min(0, 'Infants cannot be negative')
      .max(Yup.ref('adults'), 'Infants cannot exceed number of adults')
      .required(),

    infantsOnLap: Yup.number()
      .min(0, 'Infants on lap cannot be negative')
      .max(Yup.ref('adults'), 'Infants on lap cannot exceed number of adults')
      .required(),
  }),
});
