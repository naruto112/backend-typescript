"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeAppointmentsRepository = _interopRequireDefault(require("../repositories/fakes/FakeAppointmentsRepository"));

var _ListProviderAppointmentsService = _interopRequireDefault(require("./ListProviderAppointmentsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeAppontmentsRepository;
let listProviderAppointments;
let fakeCacheProvider;
describe("ListProviderAppointments", () => {
  beforeEach(() => {
    fakeAppontmentsRepository = new _FakeAppointmentsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listProviderAppointments = new _ListProviderAppointmentsService.default(fakeAppontmentsRepository, fakeCacheProvider);
  });
  it("should be able to list the appointments on a specific day", async () => {
    const appointment1 = await fakeAppontmentsRepository.create({
      provider_id: "provider",
      user_id: "user",
      date: new Date(2020, 4, 20, 14, 0, 0)
    });
    const appointment2 = await fakeAppontmentsRepository.create({
      provider_id: "provider",
      user_id: "user",
      date: new Date(2020, 4, 20, 15, 0, 0)
    });
    const appointments = await listProviderAppointments.execute({
      provider_id: "provider",
      year: 2020,
      month: 5,
      day: 20
    });
    expect(appointments).toEqual([appointment1, appointment2]);
  });
});