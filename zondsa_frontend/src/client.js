import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'fqvtpyac',
  dataset:'production',
  apiVersion:'2021-11-16',
  useCdn:true,
  token:'skF3yzB22PhoOMjqFs85tqFCWMYVEvmDdV7YZRQr3s23HviNvOI3DGOnL6exGMEclbFF1HHfxNMAS3QCxyQCyvsRRoP69X0fT4uw7GaL0Uzd7v07YjgHK8pPswLEJKJku98axx8gCG76ekyX6IBdEYNocfrjg8a1pUm3jHAhe6OtBFwrdoX6',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);