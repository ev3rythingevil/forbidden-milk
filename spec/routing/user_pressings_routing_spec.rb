require "rails_helper"

RSpec.describe UserPressingsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/user_pressings").to route_to("user_pressings#index")
    end

    it "routes to #show" do
      expect(get: "/user_pressings/1").to route_to("user_pressings#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/user_pressings").to route_to("user_pressings#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/user_pressings/1").to route_to("user_pressings#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/user_pressings/1").to route_to("user_pressings#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/user_pressings/1").to route_to("user_pressings#destroy", id: "1")
    end
  end
end
