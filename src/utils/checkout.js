import { loadStripe } from "@stripe/stripe-js";
export async function checkout({ lineItems }) {
    let stripepromise = null;
    let getPromise = () => {
        if (!stripepromise) {
            stripepromise = loadStripe('pk_live_51O0KboSCj9d5qikCkJeoCgX6ZQ3kSOlXSHzkSGu2nAPzaCYNKPpBtmlPtZLVNpICuXWHwo0ethS113Uf4wxJWYpd0088VRXp2v')
        }
        return stripepromise
    }
    let stripe = await getPromise()
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}/pranav-bajaj/?session_id=1`,
        cancelUrl: `${window.location.origin}/pranav-bajaj/?session_id=2`
    })
}
