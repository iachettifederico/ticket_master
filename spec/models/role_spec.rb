require 'rails_helper'

RSpec.describe Role, type: :model do
  context "[]" do
    let(:role) { Role.where(name: "admin").first }

    it "returns the appropriate role" do
      expect(Role["admin"]).to eql role
    end

    it "accepts symbols" do
      expect(Role[:admin]).to eql role
    end

    it "returns nil if non-existent" do
      expect(Role[:non_existent]).to eql nil
    end
  end
end
