resource "random_id" "unique" {
  byte_length = 4
}

resource "aws_s3_bucket" "devops-blog" {
  bucket = "devops-blog-${random_id.unique.hex}"

  tags = {
    Name        = "devops-blog"
    Environment = "dev"
  }
}
