require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/pressings", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Pressing. As you add validations to Pressing, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # PressingsController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) {
    {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      Pressing.create! valid_attributes
      get pressings_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      pressing = Pressing.create! valid_attributes
      get pressing_url(pressing), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Pressing" do
        expect {
          post pressings_url,
               params: { pressing: valid_attributes }, headers: valid_headers, as: :json
        }.to change(Pressing, :count).by(1)
      end

      it "renders a JSON response with the new pressing" do
        post pressings_url,
             params: { pressing: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Pressing" do
        expect {
          post pressings_url,
               params: { pressing: invalid_attributes }, as: :json
        }.to change(Pressing, :count).by(0)
      end

      it "renders a JSON response with errors for the new pressing" do
        post pressings_url,
             params: { pressing: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq("application/json")
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested pressing" do
        pressing = Pressing.create! valid_attributes
        patch pressing_url(pressing),
              params: { pressing: new_attributes }, headers: valid_headers, as: :json
        pressing.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the pressing" do
        pressing = Pressing.create! valid_attributes
        patch pressing_url(pressing),
              params: { pressing: new_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the pressing" do
        pressing = Pressing.create! valid_attributes
        patch pressing_url(pressing),
              params: { pressing: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq("application/json")
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested pressing" do
      pressing = Pressing.create! valid_attributes
      expect {
        delete pressing_url(pressing), headers: valid_headers, as: :json
      }.to change(Pressing, :count).by(-1)
    end
  end
end
