import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3DkACLAwfwse7iugudRPPwYNBpP5moZYHRMc8Vdh1371Rfq64i4NIzpRx6nE33Ylmn41geJe3Hoq0GlSNpG9tp00nw3d7b4B"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/booking/${id}`;

  const { data: service, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-purple-500"> please pay for: {id}</h2>

      <div class="card w-96 bg-base-100 shadow-xl mb-10">
        <div class="card-body">
          <h2 class="card-title">Product Name : {service.serviceName}</h2>
          <p>price: {service.price} </p>
          <p>Product Quantati: {service.purchase_quantity} pice </p>
          <p>Customer Email: {service.customer_email} </p>
        </div>
      </div>

      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm service={service} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
