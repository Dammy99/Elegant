namespace Data.Entity
{
    internal class Service
    {
        public int Id { get; set; }
        public string Offer { get; set; } = null!;
        public int SpecializationId { get; set; }
        public float Price { get; set; }
        public TimeOnly Time { get; set; }
    }
}
