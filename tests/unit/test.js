import { shallowMount } from "@vue/test-utils";
import CovidData from "@/components/CovidData.vue";

describe("CovidData.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Australia";
    const wrapper = shallowMount(CovidData, {
      propsData: {country: msg }
    });
    expect(wrapper.props().country).toBe(msg);
  });
});
